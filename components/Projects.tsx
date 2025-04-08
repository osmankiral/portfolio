"use client";

import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { useState } from "react";

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const projectsData = [
  {
    id: 1,
    category: "Web Design",
    title: "Project to be Added",
    imageUrl: "/project.png",
  },
  {
    id: 2,
    category: "Web Design",
    title: "Project to be Added",
    imageUrl: "/project.png",
  },
  {
    id: 3,
    category: "Web Design",
    title: "Project to be Added",
    imageUrl: "/project.png",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProject =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: amber[600] }}
            >
              My Projects
            </Typography>
            <Typography variant="body1" sx={{ color: "slategray" }} mt={1}>
              Projects are currently under development and will be launched
              soon.
            </Typography>
          </Box>
          <Box textAlign="center" mb={4}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  category === selectedCategory ? "contained" : "outlined"
                }
                sx={{
                  m: 1,
                  borderColor: amber[600],
                  color: category === selectedCategory ? "#000" : amber[600],
                  backgroundColor:
                    category === selectedCategory ? amber[600] : "transparent",
                  "&:hover": {
                    backgroundColor:
                      category === selectedCategory ? amber[700] : amber[50],
                    borderColor: amber[600],
                  },
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}

            <Grid
              container
              spacing={4}
              mt={4}
              justifyContent="center"
              alignItems="center"
            >
              {filteredProject.map((project) => (
                <Grid key={project.id}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "transparent",
                      display: "flex", // Flexbox düzeni
                      flexDirection: "column", // Dikey hizalama
                      justifyContent: "center", // İçeriği dikeyde ortala
                      alignItems: "center", // İçeriği yatayda ortala
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.imageUrl}
                      alt={project.title}
                      sx={{
                        height: 180,
                        width: 320, // Genişlik ayarı
                        objectFit: "cover",
                      }}
                    />

                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="body2" sx={{ color: amber[600] }}>
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        mt={1}
                        sx={{ color: "slategray" }}
                      >
                        {project.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </section>
  );
};
export default Projects;
