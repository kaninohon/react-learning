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
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item md={4}>
          <Card>
            <CardContent style={{ height: "200px", verticalAlign: "middle" }}>
              <Typography
                textAlign="center"
                fontWeight="bold"
                gutterBottom
                variant="h5"
                component="div"
              >
                {category.label}
              </Typography>
              <Typography
                textAlign="center"
                fontSize="20px"
                variant="body2"
                fontWeight="bold"
              >
                ￥{category.amount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
