import { useItems } from "@/hooks/useItems";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { Product } from "@/utils/types";
import { Button } from "@/components/ui/button";

const Data = () => {
  const { items, fetchMore, isLoading, isError, error } = useItems(3, 3);

  if (isLoading)
    return <div className="text-center py-10 text-gray-500 font-medium">Loading products...</div>;

  if (isError)
    return (
      <div className="text-center py-10 text-red-500 font-medium">
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </div>
    );

  return (
    <div className="w-full space-y-4">
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 [container-type:inline-size]">
        <div className="min-w-[1200px]">
          <TooltipProvider>
            <ScrollArea className=" w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase whitespace-nowrap">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase whitespace-nowrap">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase whitespace-nowrap">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item: Product) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 align-middle">
                        <div className="flex items-center gap-3 whitespace-nowrap">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-10 w-10 object-contain border rounded flex-shrink-0"
                          />
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="font-bold uppercase text-sm truncate max-w-[180px] cursor-pointer block text-gray-900">
                                {item.title}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>{item.title}</TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle whitespace-nowrap font-semibold uppercase truncate">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 align-middle whitespace-nowrap font-bold truncate">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 align-middle whitespace-nowrap font-bold truncate">
                        {item.rating.rate} ({item.rating.count})
                      </td>
                      <td className="px-6 py-4 text-gray-500">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TooltipProvider>
        </div>
      </div>

      {items.length < 20 && (
        <div className="text-center mt-4">
          <Button onClick={() => fetchMore?.()} className="px-6 py-2">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Data;
