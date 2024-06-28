import axios from 'axios';

const notionAPI = axios.create({
  baseURL: 'https://api.notion.com/v1/',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28',
  }
});

export const fetchDatabase = async (databaseId) => {
  const response = await notionAPI.post(`databases/${databaseId}/query`);
  return response.data;
};
