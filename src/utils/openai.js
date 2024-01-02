import OpenAI from 'openai';
import { openapi_key } from './constants';
const openai = new OpenAI({
  apiKey: openapi_key,dangerouslyAllowBrowser:true // This is the default and can be omitted
});


export default openai;