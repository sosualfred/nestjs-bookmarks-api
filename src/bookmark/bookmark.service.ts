import { Injectable } from '@nestjs/common';
import { Bookmark } from '@prisma/client';

@Injectable()
export class BookmarkService {
  allBooks(): Bookmark[] {
    return [];
  }
}
