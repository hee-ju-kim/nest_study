import axios from 'axios';

console.log('VUE_APP_URL', process.env.VUE_APP_URL)
// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.VUE_APP_URL + 'api', // 기본 URL 설정
  timeout: 10000, // 타임아웃 설정 (선택 사항)
});

export default instance;