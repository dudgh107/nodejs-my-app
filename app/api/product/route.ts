import { getProducts } from "@/service/products"

export async function GET(request: Request) {
    const products = await getProducts();
    return Response.json(products);
}
 
export async function HEAD(request: Request, res : Response) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}