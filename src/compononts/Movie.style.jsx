import styled from 'styled-components';

export const MovieContainer = styled.div`
  background-color: #646496;
  width: 10rem; /* w-40 */
  padding: 1rem; /* p-4 */
  margin: 1rem; /* m-4 */
  position: relative;
  border-radius: 0.375rem; /* rounded */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* shadow-lg */
  cursor: pointer;
  transition: box-shadow 0.3s; /* transition-shadow duration-300 */
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* hover:shadow-xl */
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  border-top-left-radius: 0.375rem; /* rounded-t */
  border-top-right-radius: 0.375rem; /* rounded-t */
`;

export const MovieTitle = styled.h2`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  margin-top: 0.5rem; /* mt-2 */
  color: white;
`;

export const MovieRating = styled.p`
  color: #B58900; /* text-yellow-900 */
  font-weight: 500; /* font-medium */
`;

export const MovieDescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* bg-opacity-70 bg-black */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
