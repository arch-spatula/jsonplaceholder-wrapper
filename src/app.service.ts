import { Injectable } from '@nestjs/common';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Injectable()
export class AppService {
  async getHello(id: number): Promise<Post> {
    try {
      if (id < 0 || id > 100) throw new Error('사이즈 초과');
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      ).then<Post>((response) => response.json());
      return res;
    } catch (e) {
      return {
        userId: -1,
        id: -1,
        title: '',
        body: '',
      };
    }
  }
}
