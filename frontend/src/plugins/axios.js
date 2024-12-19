import axios from 'axios';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: 'https://nest.penguri96.com/api', // 기본 URL 설정
  timeout: 10000, // 타임아웃 설정 (선택 사항)
});

console.log(instance.baseURL)

export default instance;