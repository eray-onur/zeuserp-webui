import { Injectable } from "@angular/core";
import { Category } from '../models/category.model';
import { CategoryDetailsDto } from '../models/complex-types/category-details.dto';
import { CategoryListDto } from '../models/complex-types/category-list.dto';

@Injectable({providedIn: 'root'})
export class CategoryService {
    categories: Array<Category>;

    constructor() {
        const categoryOne: Category = {
            id: 1,
            name: "Electronics",
            description: "Electronical devices are in this category.",
            subcategoryId: 1,
        };

        const categoryTwo: Category = {
            id: 2,
            name: "Fixed Assets",
            description: "Assets that are utilized for income are in this category.",
            subcategoryId: 2,
        };

        this.categories = [categoryOne, categoryTwo];
    }

    getAll() {
        const categoryOne: Category = {
            id: 1,
            name: "Electronics",
            description: "Electronical devices are in this category.",
            subcategoryId: 1
        };

        const categoryTwo: Category = {
            id: 2,
            name: "Fixed Assets",
            description: "Assets that are utilized for income are in this category.",
            subcategoryId: 2,
        };

        return [categoryOne, categoryTwo];
    }

    getById(id: number) {
        const categories = this.getAll();
        return categories.find(c => c.id === id);
    }

    getCategoryListDto(): Array<CategoryListDto> {
        const categories: Array<Category> = this.getAll();
        const categoryListDtos: Array<CategoryListDto> = [];
        categories.forEach(c => {
            const subcategory = this.getById(c.subcategoryId);
            categoryListDtos.push(
                {
                    categoryId: c.id,
                    categoryName: c.name,
                    subcategoryId: subcategory.id,
                    subcategoryName: subcategory.name,
                }
            );
        });

        console.log("[Category List DTO]");
        console.log(categoryListDtos);

        return categoryListDtos;
    }

    getCategoryDetailsDto(id: number): CategoryDetailsDto {
        const category: Category = this.categories.find(c => c.id === id);
        console.log(category);

        const subcategory: Category = this.getById(category.subcategoryId);

        const categoryDetailDto: CategoryDetailsDto = {
            categoryId: category.id,
            categoryName: category.name,
            categoryDescription: category.description,
            subcategoryId: subcategory.id,
            subcategoryName: subcategory.name
        };

        console.log("[Category Detail DTO]");
        console.log(categoryDetailDto);

        return categoryDetailDto;
    }

    add(category: Category) {
        this.categories.push(category);
    }

}