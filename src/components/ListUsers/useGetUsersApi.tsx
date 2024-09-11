import { useInfiniteQuery } from "@tanstack/react-query";

interface UserApiResponse {
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

const mapUser = (user: UserApiResponse) => ({
  id: user.login.uuid,
  photo: user.picture.thumbnail,
  firstName: user.name.first,
  lastName: user.name.last,
  email: user.email,
  phone: user.phone,
  city: user.location.city,
  state: user.location.state,
  country: user.location.country,
});

async function fetchUsers({ pageParam = 1 }: { pageParam: number }) {
  const response = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10`
  );
  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
  const data = await response.json();
  return data.results;
}

export const useGetUserApi = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam }) => fetchUsers({ pageParam }),
    initialPageParam: 1,

    getNextPageParam: (allPages) => {
      return allPages.length + 1;
    },
  });

  const users = data?.pages.flatMap((page) => page.map(mapUser)) || [];

  return {
    users,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
