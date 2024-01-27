'use client';
import { addProductReview } from '@/services/services';
import Rating from '@/components/ui/rating/rating';
import { Formik, Form, Field } from 'formik';
import TextInput from '@/components/formik/text-input/TextInput';
import TextArea from '@/components/formik/text-area/TextArea';
//import ButtonSubmit from '@/components/formik/submit-button/ButtonSubmit';
import { addReviewValidation } from '@/services/validation/add-review-validation-shema';
import { ReviewType } from '@/types/types';
import s from './add-review.module.scss';
import Button from '@/components/ui/button/button';

const initialValues = {
  name: '',
  email: '',
  text: '',
  rating: 5,
  date: '',
  productId: '',
  id: '',
};

const AddReview = () => {

  const onSubmit = async (values: ReviewType) => {
    console.log(values);
    
    try {
      
      const formData = new FormData();
      const reviewData: ReviewType = {
        name: formData.get('name') as string,
        text: formData.get('text') as string,
        email: formData.get('email') as string,
        rating: Number(formData.get('rating')),
        date: formData.get('date') as string,
        productId: formData.get('productId') as string,
        id: formData.get('id') as string,
      };
      console.log(reviewData);
      
      await addProductReview(reviewData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <h5 className={s.title}>Залишити відгук</h5>
      <div className={s.formContainer}>
        <Formik 
        initialValues={initialValues} 
        validationSchema={addReviewValidation} 
        onSubmit={onSubmit}>
          {formik => {
            return (
              <Form>
                <div className={s.form}>
                  <div className={s.inputsBlock}>
                    <Field
                      name="name"
                      id="name"
                      component={TextInput}
                     // maxLength={100}
                      //showCharacterCount={true}
                      label="Ваше ім'я*"
                    />
                    <Field
                      name="email"
                      id="email"
                      component={TextInput}
                     // maxLength={100}
                     // showCharacterCount={true}
                      label="Ваш email*"
                    />
                    <Field name="rating" id="rating" component={Rating} size="medium" ratingValue={5} />
                  </div>
                  <div className={s.textAreaBlock}>
                    <Field
                      name="text"
                      id="text"
                      placeholder="text"
                      component={TextArea}
                     // maxLength={1000}
                      //showCharacterCount={true}
                      label="Текст відгука"
                    />
                  </div>
                </div>
                <Button
                  color="green"
                  width='full'
                >
                  Залишити відгук
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default AddReview;
/*
     <ButtonSubmit nameButton="Залишити відгук"
                 isActive={true} 
               // isActive={formik.isValid} 
              // onClick={isActive ? onSubmit : null}
               // handlerSubmitButton={onSubmit} />
 */
