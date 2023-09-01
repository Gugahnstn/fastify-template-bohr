import app from "./app";

class DefaultPort {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  verifyPort(): boolean | number | string {
    const port = parseInt(this.value, 10);

    if (isNaN(port)) {
      return this.value;
    } else if (port >= 0) {
      return port;
    }

    return false;
  }
}

const PORT = new DefaultPort(process.env.PORT || "3000");

app.listen({port: PORT.verifyPort() as number}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})
