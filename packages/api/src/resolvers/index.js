import ProductMutation from './product/mutation';
import ProductQuery from './product/query';
import Skill from './skill/query';
import Category from './category/query';
import Testimonial from './testimonial/query';

const resolvers = {
  Mutation: {
    ...ProductMutation,
  },

  Query: {
    ...ProductQuery,
    ...Skill,
    ...Category,
    ...Testimonial,
  },
};

export default resolvers;
