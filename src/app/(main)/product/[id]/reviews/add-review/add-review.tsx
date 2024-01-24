'use client';
import { addProductReview } from '@/services/services';
import Rating from '@/components/ui/rating/rating';
import { Formik, Form, Field } from 'formik';
import TextInput from '@/components/formik/text-input/TextInput';
import TextArea from '@/components/formik/text-area/TextArea';
import ButtonSubmit from '@/components/formik/submit-button/ButtonSubmit';
import { addReviewValidation } from '@/services/validation/add-review-validation-shema';
import { ReviewType } from '@/types/types';
import s from './add-review.module.scss';

const initialValues = {
  name: '',
  text: '',
  rating: 0,
  date: '',
  productId: '',
  id: '',
};

const AddReview = () => {
  const onSubmit = async (values: ReviewType) => {
    try {
        /*
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('text', values.text);
      formData.append('rating', values.text);
      formData.append('date', values.text);
      formData.append('productId', values.text);
      formData.append('id', values.text);
*/
      await addProductReview(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <h5 className={s.title}>Залишити відгук</h5>
      <div className={s.form}>
        <Formik initialValues={initialValues} validationSchema={addReviewValidation} onSubmit={onSubmit}>
          {formik => {
            return (
              <Form>
                <Field
                  name="name"
                  id="name"
                  placeholder="name"
                  component={TextInput}
                  maxLength={100}
                  showCharacterCount={true}
                  label="Ім'я*"
                />
                <Field
                  name="email"
                  id="email"
                  placeholder="email"
                  component={TextInput}
                  maxLength={100}
                  showCharacterCount={true}
                  label="Ім'я*"
                />
                <Field
                  name="text"
                  id="text"
                  placeholder="text"
                  component={TextArea}
                  maxLength={1000}
                  showCharacterCount={true}
                  label="Відгук"
                />

                <ButtonSubmit
                  nameButton="Зберегти зміни"
                  isActive={formik.isValid}
                  handlerSubmitButton={onSubmit}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default AddReview;
