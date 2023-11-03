import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Room, Email, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Contact = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
      <Container>
      <div
        className="fixed-top bg-black"
        style={{ height: "75px", zIndex: "1" }}
        ></div>
      <Grid container spacing={4}>
        <Grid item xs={12} marginY={12} sm={6} className="office-info">
          <Typography variant="h4">Contact Information</Typography>
          <Typography variant="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            omnis consequuntur et veritatis dolores. Suscipit est repudiandae,
            totam omnis, fuga numquam nulla illo exercitationem ratione fugit
            corporis minus aperiam explicabo.
          </Typography>
          <Typography variant="h6">The Office</Typography>
          <Typography variant="body1">
            <Room />
            70 Washington Square South New York, NY 10012, United States
          </Typography>
          <Link to="#">
            <Email /> your.email@example.com
          </Link>
          <Link to="#">
            <Phone /> +1 123-456-7890
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Got Any Question?</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=''
              rules={{required: 'Name is required'}}
              render={({field}) => (
                  <TextField
                  placeholder="Name*"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  {...field}
                  />
                  )}
                  />
            <Controller
              name="email"
              control={control}
              defaultValue=''
              rules={{required: 'Email is required'}}
              render={({field}) => (
                <TextField
                  placeholder="Email*"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=''
              render={({field}) => (
                <TextField
                  placeholder="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=''
              rules={{required: 'Message is required'}}
              render={({field}) => (
                <TextField
                  placeholder="Message*"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  {...field}
                />
              )}
            />
            <Button 
              type="submit"
              variant="outline"
              color="primary"
              fullWidth
              size="large"
            >
                Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contact;

