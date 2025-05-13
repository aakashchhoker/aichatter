import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ComponentProps({ props = [] }) {
  if (props.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Props</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr>
                <th className="px-2 md:px-4 py-1 md:py-2 text-left">Name</th>
                <th className="px-2 md:px-4 py-1 md:py-2 text-left">Type</th>
                <th className="px-2 md:px-4 py-1 md:py-2 text-left">Default</th>
                <th className="px-2 md:px-4 py-1 md:py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name}>
                  <td className="px-2 md:px-4 py-1 md:py-2 font-medium">{prop.name}</td>
                  <td className="px-2 md:px-4 py-1 md:py-2">{prop.type}</td>
                  <td className="px-2 md:px-4 py-1 md:py-2">{prop.default}</td>
                  <td className="px-2 md:px-4 py-1 md:py-2">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 