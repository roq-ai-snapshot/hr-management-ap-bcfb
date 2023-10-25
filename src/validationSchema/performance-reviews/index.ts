import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  review_date: yup.date().required(),
  performance_rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  employee_id: yup.string().nullable().required(),
});
