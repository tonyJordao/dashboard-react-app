import React from "react";

import {Formik, Form} from "formik";
import * as Yup from "yup";

import styles from "./CadastrarExperiencia.module.css";
import Input from "../../../../components/forms/Input/Input";
import Textarea from "../../../../components/forms/textarea/Textarea";

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

cadastrarExperiencia: React.FC = () => {

    const InicialValues: FormValues = {
        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",
    };
    
   const validationSchema = yup.object().shape({
        titulo: Yup.string().required("campo obrigatorio"),
        descricao: Yup.string().required("campo obrigatorio"),
        tipo: Yup.string().required("campo obrigatorio"),
        anoInicio: Yup.string().required("campo obrigatorio").typeError("Um número é obrigatório"),errors={errors.anoInicio}
        touched={touched.anoInicio}
        anoFim: Yup.string().required("campo obrigatorio"),
   });
   
    
   const onSubmit = (values: FormValues, {resetForm}: {resetForm: () => void }) => {
      //logica de envio para o backend
      console.log(values);
      resetForm();
      alert("Formulário enviado com sucesso");
   };

   return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched })=> (
                    <Form className={styles.form}>

                        <h2 className={styles.title}>Cadastrar Experiencia;</h2>

                        <Input
                        label="Título"
                        name="Título"
                        errors={errors.titulo}
                        touched={touched.titulo}
                        />

                         <Input
                         label="Ano Início"
                         name="Ano Início"
                         errors={errors.anoInicio}
                         touched={touched.anoInicio}
                         />

                         <Input
                         label="Ano Fim"
                         name="Ano Fim"
                         errors={errors.anoFim}
                         touched={touched.anoFim}
                         />

                         <Textarea
                         label="Descrição"
                         name="descricao"
                         errors={errors.descricao}
                         touched={touched.descricao}
                         />

                         <button type="submit" clasName={styles.button}>Cadastrar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default CadastrarExperiencia; 