import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  padding: 1rem; /* p-4 */
  background-color: rgba(0, 0, 0, 0.2); /* bg-black bg-opacity-20 */
  border-radius: 0.25rem; /* rounded */
  position: absolute; /* absolute */
  top: 0; /* top-0 */
  left: 0; /* left-0 */
  width: 100%; /* w-full */
  height: 100%; /* h-full */
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  justify-content: center; /* justify-center */
  align-items: center; /* items-center */
`;

export const DescriptionTitle = styled.h3`
  font-size: 1rem; /* text-base */
  font-weight: bold; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
  color: white; /* text-white */
`;

export const DescriptionText = styled.p`
  font-size: 0.75rem; /* text-xs */
  max-height: 200px; /* max-h-[200px] */
  overflow-y: auto; /* overflow-y-auto */
  color: white; /* text-white */
`;
