import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Name must have atleast 2 characters")
    .required('Name is required'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], "Size is required")
    .required('Size is required'),
    sauce: yup
    .string()
    .oneOf(['original', 'garlicRanch', 'BBQsauce', 'spinachAlfredo'], 'Sauce selection Required')
    .required('Sauce selection is required'),
    specialInstruction: yup
    .string()
    .min(0, 'instructions are not required'),
    
})

export default formSchema