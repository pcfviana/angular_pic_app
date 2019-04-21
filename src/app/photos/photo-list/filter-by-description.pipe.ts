import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform
{
    transform(photos: Photo[], descriptonQuery: string) {
        descriptonQuery = descriptonQuery.trim().toLowerCase();

        if(!descriptonQuery)
        {
            return photos;
        }
        
        return photos.filter(photo => photo.description.toLowerCase().includes(descriptonQuery));
    }

}