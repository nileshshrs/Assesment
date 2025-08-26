import { useItems } from "@/hooks/useItems";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/utils/types";

const Home = () => {
  const { items, isLoading, isError, error } = useItems(3, 3);

  if (isLoading)
    return <div className="text-center py-10 text-gray-500 font-medium">Loading products...</div>;

  if (isError)
    return (
      <div className="text-center py-10 text-red-500 font-medium">
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </div>
    );

  return (
    <div className="w-full space-y-6 [container-type:inline-size] px-5">
      <div className="hidden md:@block">
        <div className="grid gap-10 @sm:grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4">
          <TooltipProvider>
            {items.map((item: Product) => (
              <Card
                key={item.id}
                className="bg-white text-black hover:shadow-lg transition min-h-[28rem] flex flex-col"
              >
                <CardHeader className="p-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-contain p-4 bg-gray-50"
                  />
                </CardHeader>
                <CardContent className="space-y-2 flex-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CardTitle className="text-sm truncate cursor-pointer">{item.title}</CardTitle>
                    </TooltipTrigger>
                    <TooltipContent>{item.title}</TooltipContent>
                  </Tooltip>
                  <p className="text-gray-700 font-semibold text-sm uppercase">{item.category}</p>
                  <p className="text-black font-bold">${item.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm font-semibold">
                    Rating: {item.rating.rate} ({item.rating.count})
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </TooltipProvider>
        </div>
      </div>

      <div className="@md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:@hidden">
        <TooltipProvider>
          {items.map((item: Product) => (
            <Card
              key={item.id}
              className="bg-white text-black hover:shadow-lg transition min-h-[28rem] flex flex-col mb-5"
            >
              <CardHeader className="p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain p-4 bg-gray-50"
                />
              </CardHeader>
              <CardContent className="space-y-2 flex-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CardTitle className="text-sm truncate cursor-pointer">{item.title}</CardTitle>
                  </TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
                <p className="text-gray-700 font-semibold text-sm uppercase">{item.category}</p>
                <p className="text-black font-bold">${item.price.toFixed(2)}</p>
                <p className="text-gray-600 text-sm font-semibold">
                  Rating: {item.rating.rate} ({item.rating.count})
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black text-white hover:bg-gray-800">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Home;
