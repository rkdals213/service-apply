import axios from "axios";
import { headers } from "./api";

const COMMON_PATH = "/api/recruitments";

export const fetchRecruitmentItems = (recruitmentId) =>
  axios.get(`${COMMON_PATH}/${recruitmentId}/items`);

// NOTE: 현재 사용 불가, 지원화면도 해당 API 사용할 수 있는지 여부가 바뀌어야 함
// export const fetchRecruitment = (recruitmentId) => axios.get(`${COMMON_PATH}/${recruitmentId}`);

export const fetchRecruitments = () => axios.get(COMMON_PATH);

export const fetchMyMissions = ({ recruitmentId, token }) =>
  axios.get(`${COMMON_PATH}/${recruitmentId}/missions/me`, headers({ token }));

export const fetchAssignment = ({ recruitmentId, missionId, token }) =>
  axios.get(
    `${COMMON_PATH}/${recruitmentId}/missions/${missionId}/assignments/me`,
    headers({ token })
  );

export const postAssignment = ({ recruitmentId, missionId, token, assignmentData }) =>
  axios.post(
    `${COMMON_PATH}/${recruitmentId}/missions/${missionId}/assignments`,
    assignmentData,
    headers({ token })
  );

export const patchAssignment = ({ recruitmentId, missionId, token, assignmentData }) =>
  axios.patch(
    `${COMMON_PATH}/${recruitmentId}/missions/${missionId}/assignments`,
    assignmentData,
    headers({ token })
  );
