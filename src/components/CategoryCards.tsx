import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
type MyType = {
  amount: number;
  label: string;
};
interface AppProps {
  categories: MyType[];
}

export default function CategoryCards({ categories }: AppProps) {
  return (
    <Grid container>
      {categories.map((category) => (
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
