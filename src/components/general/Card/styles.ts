import React from "react";
import styled, { css } from "styled-components";

export const CardWrapper = styled.article`
  background: rgba(255, 255, 255);
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2.5rem;
  text-align: center;
`;

export const CardHeader = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #14213d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CardHeading = styled.h4`
  margin: 1.5rem;
  font-size: 1.5rem;
  color: #14213d;
  font-weight: bold;
`;

export const CardBody = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardOptionsNote = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardOptionsNoteSmall = styled.small`
  background-color: #fca311;
  display: inline-table;
  font-size: 0.7rem;
  text-decoration: none;
  color: #14213d;
  margin: 5px;
  padding: 5px;
  transition: color 0.25s ease-in;
  border-radius: 10px;
  text-overflow:ellipsis;
`;


