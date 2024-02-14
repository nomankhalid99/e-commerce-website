/* global google */
/* eslint-disable no-undef */

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Breadcrumbs,
  Link,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import {
  ArrowForward,
  EmailOutlined,
  PhoneOutlined,
  RoomOutlined,
} from "@mui/icons-material";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (typeof google === "object" && typeof google.maps === "object") {
      const mapOption = {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 14,
      };

      const map = new google.maps.Map(
        document.getElementById("google-map"),
        mapOption
      );
      new google.maps.Marker({
        position: mapOption.center,
        map,
        title: "",
      });
    }
  }, []);

  const offices = [
    {
      id: 1,
      name: "Wall Street Plaza",
      description: "88 Pine St, New York, NY 10005, USA",
      image:
        "https://img.freepik.com/free-photo/building-alley-stone-asian-seven_1417-220.jpg?w=996&t=st=1699024433~exp=1699025033~hmac=847d30664ed57002573698e165ec0a4b58215aef896fe992f2d6c4c65bd1c614",
      phone: "+1 987-876-6543",
    },
    {
      id: 2,
      name: "One New York Plaza",
      description: "88 Pine St, New York, NY 10005, USA",
      image:
        "https://img.freepik.com/free-photo/nightlife-bustling-illuminated-chinese-cityscape-generative-ai_188544-11241.jpg?t=st=1699024581~exp=1699028181~hmac=6df7530d6c715d306e586753654881ebd44e15b1168a0f5b1ee7cddbca6b84ac&w=740",
      phone: "+1 987-876-6543",
    },
  ];

  return (
    <div className="contact-container">
      <Container>
        <div
          className="fixed-top bg-black"
          style={{ height: "95px", zIndex: "1" }}
        ></div>
        <Breadcrumbs className="crum" marginTop={14} marginBottom={2} aria-label="breadcrumb">
          <Link underline="none" color="inherit" href="/">
            Home
          </Link>
          <Link underline="none" color="inherit" href="#">
            Pages
          </Link>
          <Typography color="text.primary">Contact us</Typography>
        </Breadcrumbs>
        <div className="bg-img">
          <div className="title d-flex justify-content-center align-items-center">
            <h1>
              <p className="text-white fs-1 mb-0">Contact Us</p>
              <p className="text-white mt-0 fs-5">Keep in touch with us</p>
            </h1>
          </div>
        </div>
        <Grid container marginBottom={8} marginTop={1} spacing={4}>
          <Grid item xs={12} sm={6} className="office-info">
            <Typography variant="h4">Contact Information</Typography>
            <Typography marginTop={2} variant="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              omnis consequuntur et veritatis dolores. Suscipit est repudiandae,
              totam omnis, fuga numquam nulla illo exercitationem ratione fugit
              corporis minus aperiam explicabo.
            </Typography>
            <Typography marginTop={3} variant="h6">
              The Office
            </Typography>
            <Typography marginTop={2} variant="body1">
              <RoomOutlined />
              70 Washington Square South New York, NY 10012, United States
            </Typography>
            <Typography marginTop={2} variant="body1">
              <EmailOutlined /> your.email@example.com
            </Typography>
            <Typography marginTop={2} variant="body1">
              <PhoneOutlined /> +1 123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="contact-form">
            <Typography variant="h4">Got Any Question?</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
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
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
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
                defaultValue=""
                render={({ field }) => (
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
                defaultValue=""
                rules={{ required: "Message is required" }}
                render={({ field }) => (
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
              <Button type="submit" variant="outlined" size="large">
                Submit <ArrowForward />
              </Button>
            </form>
          </Grid>
        </Grid>
        <hr />
        <Typography marginTop={6} textAlign="center" variant="h4">
          Our Stores
        </Typography>
        <Grid container className="card-container" marginBottom={10} marginTop={3} spacing={2}>
          {offices.map((office) => (
            <Grid item key={office.id} xs={12} sm={6}>
              <Card className='card'>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      alt={office.name}
                      height="300"
                      image={office.image}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardContent>
                      <Typography variant="h6">{office.name}</Typography>
                      <Typography variant="p" display='block' color="textSecondary">
                        {office.description}
                      </Typography>
                      <Typography variant="p" color="rgb(210, 88, 88)">
                        {office.phone}
                      </Typography>
                      <Typography marginTop={2} variant="h6">
                        Store hours:
                      </Typography>
                      <Typography variant="p"  display='block' color="textSecondary">
                        Monday - Saturday 11am to 7pm
                      </Typography>
                      <Typography variant="p" display='block' color="textSecondary">
                        Sunday 11am to 6pm
                      </Typography>
                      <Button type="submit" variant="outlined" size="samll">
                        View Map <ArrowForward />
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div id="google-map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default Contact;
