import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";
import React from "react";

type Props<TInputDate, TDate> = {
  name: string;
} & Omit<DatePickerProps<TInputDate, TDate>, "onChange" | "value">;

const FormikDatePicker = <TInputDate, TDate = TInputDate>(
  props: Props<TInputDate, TDate>
) => {
  const { name, ...restProps } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  return (
    <DatePicker
      {...restProps}
      value={field.value ?? null}
      onChange={(val) => setFieldValue(name, val)}
    />
  );
};

export default FormikDatePicker;
