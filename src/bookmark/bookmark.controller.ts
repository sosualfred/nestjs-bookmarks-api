import { Controller, Get } from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Get('/')
  listBookmarks(): Bookmark[] {
    return this.bookmarkService.allBooks();
  }
}
