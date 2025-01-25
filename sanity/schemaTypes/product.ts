import { off, title } from "process";
import { validation } from "sanity";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [

    {
      name:'id',
      type:'number',
      title:'Id',
      initialValue: () => new Date().getTime(),

    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required().error('Name is required'),
    },

    {
      name:'slug',
      title:'Slug',
      type:'slug',
      validation: (Rule: any) => Rule.required().error("Slug is required"),
      options: {
        source:'name'
      }
    },

    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.required().error('Price is required'),
    },

    {
      name:'discountPrice',
      title:'Discount Price',
      type:'number',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: any) =>
        Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: any) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: any) => Rule.min(0).integer().error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: any) => Rule.required().error('Category is required'),
    },

    {
      name:'colors',
      title:'Colors',
      type:'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        { name: 'width', title: 'Width (cm)', type: 'number' },
        { name: 'depth', title: 'Depth (cm)', type: 'number' },
        { name: 'height', title: 'Height (cm)', type: 'number' },
     
      ],
    },

    // {
    //   name:'dimensions',
    //   title:'Dimensions',
    // }
  ],
};
