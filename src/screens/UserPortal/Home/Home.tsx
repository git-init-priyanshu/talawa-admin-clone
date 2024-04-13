import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SendIcon from '@mui/icons-material/Send';

import type {
  InterfacePostCard,
  InterfaceQueryUserListItem,
} from 'utils/interfaces';
import {
  ADVERTISEMENTS_GET,
  ORGANIZATION_POST_LIST,
  USER_DETAILS,
} from 'GraphQl/Queries/Queries';
import OrganizationNavbar from 'components/UserPortal/OrganizationNavbar/OrganizationNavbar';
import PostCard from 'components/UserPortal/PostCard/PostCard';
import PromotedPost from 'components/UserPortal/PromotedPost/PromotedPost';
import UserSidebar from 'components/UserPortal/UserSidebar/UserSidebar';
import StartPostModal from 'components/UserPortal/StartPostModal/StartPostModal';
import useLocalStorage from 'utils/useLocalstorage';
import styles from './Home.module.css';
import convertToBase64 from 'utils/convertToBase64';

interface InterfaceAdContent {
  _id: string;
  name: string;
  type: string;
  organization: {
    _id: string;
  };
  mediaUrl: string;
  endDate: string;
  startDate: string;
}

type AdvertisementsConnection = {
  edges: {
    node: InterfaceAdContent;
  }[];
};

interface InterfaceAdConnection {
  advertisementsConnection?: AdvertisementsConnection;
}

type InterfacePostComments = {
  creator: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  likeCount: number;
  likedBy: {
    id: string;
  }[];
  text: string;
}[];

type InterfacePostLikes = {
  firstName: string;
  lastName: string;
  id: string;
}[];

type InterfacePostNode = {
  commentCount: number;
  createdAt: string;
  creator: {
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
  };
  imageUrl: string | null;
  likeCount: number;
  likedBy: {
    _id: string;
    firstName: string;
    lastName: string;
  }[];
  pinned: boolean;
  text: string;
  title: string;
  videoUrl: string | null;
  _id: string;
};

export default function home(): JSX.Element {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const { getItem } = useLocalStorage();
  const [posts, setPosts] = useState([]);
  const [pinnedPosts, setPinnedPosts] = useState([]);
  const [adContent, setAdContent] = useState<InterfaceAdConnection>({});
  const [filteredAd, setFilteredAd] = useState<InterfaceAdContent[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { orgId } = useParams();

  const [postImg, setPostImg] = useState<string>('');

  if (!orgId) {
    return <Navigate to={'/user'} />;
  }

  const navbarProps = {
    currentPage: 'home',
  };
  const { data: promotedPostsData } = useQuery(ADVERTISEMENTS_GET);
  const {
    data,
    refetch,
    loading: loadingPosts,
  } = useQuery(ORGANIZATION_POST_LIST, {
    variables: { id: orgId, first: 10 },
  });
  const userId: string | null = getItem('userId');

  const { data: userData } = useQuery(USER_DETAILS, {
    variables: { id: userId },
  });

  const user: InterfaceQueryUserListItem | undefined = userData?.user;

  useEffect(() => {
    if (data) {
      setPosts(data.organizations[0].posts.edges);
    }
  }, [data]);

  useEffect(() => {
    if (promotedPostsData) {
      setAdContent(promotedPostsData);
    }
  }, [promotedPostsData]);

  useEffect(() => {
    setFilteredAd(filterAdContent(adContent, orgId));
  }, [adContent]);

  useEffect(() => {
    setPinnedPosts(
      posts.filter(({ node }: { node: InterfacePostNode }) => {
        if (!node.pinned) return;
      }),
    );
  }, [posts]);

  const filterAdContent = (
    data: {
      advertisementsConnection?: {
        edges: {
          node: InterfaceAdContent;
        }[];
      };
    },
    currentOrgId: string,
    currentDate: Date = new Date(),
  ): InterfaceAdContent[] => {
    const { advertisementsConnection } = data;

    if (advertisementsConnection && advertisementsConnection.edges) {
      const { edges } = advertisementsConnection;

      return edges
        .map((edge) => edge.node)
        .filter(
          (ad: InterfaceAdContent) =>
            ad.organization._id === currentOrgId &&
            new Date(ad.endDate) > currentDate,
        );
    }

    return [];
  };

  const getCardProps = (node: InterfacePostNode): InterfacePostCard => {
    const {
      // likedBy,
      // comments,
      creator,
      _id,
      imageUrl,
      videoUrl,
      title,
      text,
      likeCount,
      commentCount,
    } = node;
    // const allLikes: any =
    //   likedBy && Array.isArray(likedBy)
    //     ? likedBy.map((value: any) => ({
    //         firstName: value.firstName,
    //         lastName: value.lastName,
    //         id: value._id,
    //       }))
    //     : [];

    const allLikes: InterfacePostLikes = [];

    // const postComments: any =
    //   comments && Array.isArray(comments)
    //     ? comments.map((value: any) => {
    //         const commentLikes = value.likedBy.map(
    //           (commentLike: any) => ({ id: commentLike._id }),
    //         );
    //         return {
    //           id: value._id,
    //           creator: {
    //             firstName: value.creator.firstName,
    //             lastName: value.creator.lastName,
    //             id: value.creator._id,
    //             email: value.creator.email,
    //           },
    //           likeCount: value.likeCount,
    //           likedBy: commentLikes,
    //           text: value.text,
    //         };
    //       })
    //     : [];

    const postComments: InterfacePostComments = [];

    const date = new Date(node.createdAt);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);

    const cardProps: InterfacePostCard = {
      id: _id,
      creator: {
        id: creator._id,
        firstName: creator.firstName,
        lastName: creator.lastName,
        email: creator.email,
      },
      postedAt: formattedDate,
      image: imageUrl,
      video: videoUrl,
      title,
      text,
      likeCount,
      commentCount,
      comments: postComments,
      likedBy: allLikes,
    };

    return cardProps;
  };

  const handlePostButtonClick = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <OrganizationNavbar {...navbarProps} />
      <div className={`d-flex flex-row ${styles.containerHeight}`}>
        <UserSidebar />
        <div className={`${styles.colorLight} ${styles.mainContainer}`}>
          <h1>{t(`posts`)}</h1>
          <div className={`${styles.postContainer}`}>
            <div className={`${styles.heading}`}>{t('startPost')}</div>
            <div className={styles.postInputContainer}>
              <Row className="d-flex gap-1">
                <Col className={styles.maxWidth}>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    multiple={false}
                    className={styles.inputArea}
                    data-testid="fileInput"
                    autoComplete="off"
                    onChange={async (
                      e: React.ChangeEvent<HTMLInputElement>,
                    ): Promise<void> => {
                      setPostImg('');
                      const target = e.target as HTMLInputElement;
                      const file = target.files && target.files[0];
                      const base64file = file && (await convertToBase64(file));
                      setPostImg(base64file ?? '');
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-end">
              <Button
                size="sm"
                data-testid={'postBtn'}
                onClick={handlePostButtonClick}
                className="px-4 py-sm-2"
              >
                {t('post')} <SendIcon />
              </Button>
            </div>
          </div>
          <div style={{ marginTop: `2rem` }}>
            <h2>{t('feed')}</h2>
            {pinnedPosts.length > 0 && (
              <div>
                <p>{t(`pinnedPosts`)}</p>
                <div className={` ${styles.pinnedPostsCardsContainer}`}>
                  {loadingPosts ? (
                    <div className={`d-flex flex-row justify-content-center`}>
                      <HourglassBottomIcon /> <span>Loading...</span>
                    </div>
                  ) : (
                    <>
                      {pinnedPosts.map(
                        ({ node }: { node: InterfacePostNode }) => {
                          const cardProps = getCardProps(node);
                          return <PostCard key={node._id} {...cardProps} />;
                        },
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {filteredAd.length > 0 && (
            <div data-testid="promotedPostsContainer">
              {filteredAd.map((post: InterfaceAdContent) => (
                <PromotedPost
                  key={post._id}
                  id={post._id}
                  image={post.mediaUrl}
                  title={post.name}
                  data-testid="postid"
                />
              ))}
            </div>
          )}
          <p className=" mt-5">Your Feed</p>
          <div className={` ${styles.postsCardsContainer}`}>
            {loadingPosts ? (
              <div className={`d-flex flex-row`}>
                <HourglassBottomIcon /> <span>Loading...</span>
              </div>
            ) : (
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {posts.map(({ node }: { node: InterfacePostNode }) => {
                  const cardProps = getCardProps(node);
                  return <PostCard key={node._id} {...cardProps} />;
                })}
              </div>
            )}
          </div>
        </div>
        <StartPostModal
          show={showModal}
          onHide={handleModalClose}
          fetchPosts={refetch}
          userData={user}
          organizationId={orgId}
          img={postImg}
        />
      </div>
    </>
  );
}
