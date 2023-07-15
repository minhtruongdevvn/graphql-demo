import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { createRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const QUERY_ALL_USER = gql`
   query GetAllUsers {
      users {
         id
         name
         age
         username
         nationality
      }
   }
`;

const QUERY_ALL_MOVIES = gql`
   query GetAllMovies {
      movies {
         id
         name
         isInTheaters
         yearOfPublication
      }
   }
`;

const QUERY_A_MOVIE = gql`
   query GetAMovie($name: String!) {
      movie(name: $name) {
         name
         yearOfPublication
      }
   }
`;

const DELETE_USER_MUTATION = gql`
   mutation DeleteUser($id: Int!) {
      deleteUser(userId: $id)
   }
`;

const UserList: React.FC = () => {
   const location = useLocation();

   const [
      deleteUser,
      { loading: deleteUserLoading, called: deleteUserCalled, reset },
   ] = useMutation(DELETE_USER_MUTATION);
   const { data: userData, refetch: refetchUser } = useQuery(QUERY_ALL_USER, {
      notifyOnNetworkStatusChange: true, // ensure loading value up to date
   });
   const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
   const [fetchMovie, { data: fetchMovieData, error: fetchMovieError }] =
      useLazyQuery(QUERY_A_MOVIE);
   const movieSearchRef = createRef<HTMLInputElement>();
   const users = userData?.users;
   const [movies, setMovies] = useState<Array<any>>([]);

   useEffect(() => {
      movieData?.movies && setMovies(movieData.movies);
      fetchMovieData?.movie && setMovies([fetchMovieData.movie]);
   }, [movieData, fetchMovieData]);

   useEffect(() => {
      if (location.pathname === "/") refetchUser();
   }, [location]);

   useEffect(() => {
      if (deleteUserCalled && !deleteUserLoading) {
         refetchUser();
         reset();
      }
   }, [deleteUserLoading, deleteUserCalled]);

   const items = (item: any, of: "user" | "movie") => {
      return item.map((e: any) => (
         <div style={{ marginTop: "20px" }} key={e.id}>
            {of === "user" ? (
               <button
                  onClick={() => {
                     if (of === "user") {
                        deleteUser({ variables: { id: Number(e.id) } });
                     }
                  }}>
                  Remove
               </button>
            ) : (
               ""
            )}
            {Object.keys(e).map((key) => {
               if (key.includes("__")) return;
               return (
                  <div key={key}>
                     {key}: {e[key]}
                  </div>
               );
            })}
         </div>
      ));
   };

   return (
      <table style={{ width: "100vw" }}>
         <colgroup>
            <col style={{ width: "50%" }} />
            <col style={{ width: "50%" }} />
         </colgroup>
         <thead>
            <tr>
               <th>
                  Users <Link to="users/create">Create user</Link>
               </th>
               <th>Movies</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td key="user" style={{ verticalAlign: "top" }}>
                  {users && items(users, "user")}
               </td>
               <td key="movie" style={{ verticalAlign: "top" }}>
                  {movies && items(movies, "movie")}
                  <br />
                  <input ref={movieSearchRef} type="text" />
                  <button
                     onClick={() =>
                        fetchMovie({
                           variables: {
                              name: movieSearchRef.current?.value ?? "",
                           },
                        })
                     }>
                     fetch movie
                  </button>
               </td>
            </tr>
         </tbody>
      </table>
   );
};

export default UserList;
