import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup
    .string()
    .oneOf(['pepperoni', 'olives', 'onions', 'sausage'], "Size is required"),
    sauce: yup
    .string()
    .oneOf(['original', 'garlicRanch', 'BBQsauce', 'spinachAlfredo'], 'Sauce selection Required')
})

export default formSchema