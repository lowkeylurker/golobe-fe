import { Button } from '@/components/ui/button'
import { Google, StarFilled } from '@/shared/icons'

export default function Reviews() {
  return (
    <div className="">
      <div className="mb-8 flex items-center justify-between">
        <div className="">
          <h2 className="mb-2 text-3xl font-bold">Reviews</h2>
          <p>What people says about Golobe facilities</p>
        </div>
        <Button variant="outline">See All</Button>
      </div>
      <div className="grid grid-cols-3 gap-6 xl:grid-cols-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="shadow-mainColor-200 relative max-w-sm rounded-2xl bg-white p-6 drop-shadow-md"
            style={{ boxShadow: '16px 16px 0px var(--tw-shadow-color)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              “A real sense of community, nurtured”
            </h3>

            <p className="mb-2 text-sm text-gray-600">
              Really appreciate the help and support from the staff during these
              tough times. Shoutout to Katie for...
            </p>

            <a
              href="#"
              className="mb-2 inline-block text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              View more
            </a>

            <div className="my-2 flex items-center gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarFilled key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <div className="text-sm font-medium text-gray-800">Olga</div>
            <div className="mb-2 text-xs text-gray-500">
              Weave Studios – Kai Tak
            </div>

            <div className="mb-4 flex items-center gap-1">
              <Google />
              <span className="text-sm text-gray-500">Google</span>
            </div>

            {/* <Image
                  className="h-48 w-full rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b" // bạn có thể thay link ảnh
                  alt="Review"
                /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
