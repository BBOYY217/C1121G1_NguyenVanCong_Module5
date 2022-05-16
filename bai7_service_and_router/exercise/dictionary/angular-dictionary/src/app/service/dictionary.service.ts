import { Injectable } from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Word[] = [
    {
      word: 'hello',
      mean: 'xin chào'
    },
    {
      word: 'bye',
      mean: 'tạm biệt'
    },
    {
      word: 'red',
      mean: 'đỏ'
    },
    {
      word: 'green',
      mean: 'xanh'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaryList;
  }

  findAll() {
    return this.dictionaryList;
  }

  translate(word: string | null): string {
    if (!word) {
      return '';
    }
    const wordTranslate = this.dictionaryList.find(item => item.word === word.toLowerCase());
    if (wordTranslate) {
      return wordTranslate.mean;
    }
    return 'Not found';
  }
}
