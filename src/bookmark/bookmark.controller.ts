import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './types/bookmark';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Get('/')
  listBookmarks(): Bookmark[] {
    return this.bookmarkService.allBooks();
  }
}
