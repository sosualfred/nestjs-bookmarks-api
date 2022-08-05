import { Injectable } from '@nestjs/common';
import { Bookmark } from './types/bookmark';

@Injectable()
export class BookmarkService {
  allBooks(): Bookmark[] {
    return [
      {
        name: 'Bookmark 1',
        content: 'This is a bookmark 1',
      },
    ];
  }
}
