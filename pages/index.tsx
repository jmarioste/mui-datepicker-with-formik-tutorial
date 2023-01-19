import { Button, TextField } from "@mui/material";
import FormikDatePicker from "components/FormikDatePicker";
import { Formik, Form } from "formik";
import type { NextPage } from "next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const HomePage: NextPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="xs">
        <Formik
          initialValues={{
            start_date: null,
          }}
          onSubmit={(values) => console.log(JSON.stringify(values, null, 4))}
        >
          <Form>
            <Stack gap={2} my={10}>
              <Typography variant="h3" fontWeight={700}>
                My Form
              </Typography>
              <FormikDatePicker
                name="start_date"
                renderInput={(params) => (
                  <TextField {...params} label="Start date" />
                )}
              />
              <Button type="submit" variant="outlined" color="primary">
                Submit
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Container>
    </LocalizationProvider>
  );
};

export default HomePage;
