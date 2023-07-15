import { gql, useMutation } from "@apollo/client";
import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_USER_MUTATION = gql`
   mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
         id
         name
         age
         nationality
      }
   }
`;

const inputStyle: CSSProperties = {
   display: "block",
   margin: "20px",
};

const CreateUser: React.FC = () => {
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [age, setAge] = useState("");
   const [nationality, setNationality] = useState("");

   const [createUser] = useMutation(CREATE_USER_MUTATION);

   return (
      <div>
         <button
            onClick={() => {
               navigate(-1);
            }}>
            Back
         </button>
         <div>
            <input
               style={inputStyle}
               type="text"
               placeholder="Name..."
               onChange={(event) => {
                  setName(event.target.value);
               }}
            />
            <input
               style={inputStyle}
               type="text"
               placeholder="Username..."
               onChange={(event) => {
                  setUsername(event.target.value);
               }}
            />
            <input
               style={inputStyle}
               type="number"
               placeholder="Age..."
               onChange={(event) => {
                  setAge(event.target.value);
               }}
            />
            <input
               style={inputStyle}
               type="text"
               placeholder="Nationality..."
               onChange={(event) => {
                  setNationality(event.target.value.toUpperCase());
               }}
            />
            <button
               style={inputStyle}
               onClick={() => {
                  createUser({
                     variables: {
                        input: {
                           name,
                           username,
                           age,
                           nationality:
                              nationality === "" ? undefined : nationality,
                        },
                     },
                  });
               }}>
               Create User
            </button>
         </div>
      </div>
   );
};

export default CreateUser;
