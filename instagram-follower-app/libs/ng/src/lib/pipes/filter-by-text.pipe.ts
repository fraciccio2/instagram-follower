import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByText',
})
export class FilterByTextPipe implements PipeTransform {
  transform(
    haystack: any[] | null | undefined,
    needle: string | undefined,
    straws: string[]
  ): any[] {
    if (!haystack) {
      return [];
    }
    if (!needle) {
      return haystack;
    }
    const result: unknown[] = [];
    haystack.forEach((item) => {
      let found = false;
      straws.forEach((straw) => {
        found =
          found ||
          item[straw as keyof object]
            .toLowerCase()
            .includes(needle.toLowerCase());
      });
      if (found) {
        result.push(item);
      }
    });
    return result;
  }
}
