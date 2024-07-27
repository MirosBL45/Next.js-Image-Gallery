import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  NEXT_PUBLIC_PEXELS_API_KEY: str(),
});

export default env;
