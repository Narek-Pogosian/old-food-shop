import Star from "../details/reviews/star";

const CustomerOpinions = () => {
  return (
    <section>
      <h2 className="mb-10 text-xl font-semibold text-center md:text-3xl">
        Our customer&#39;s opinion
      </h2>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 p-4 space-y-4 border rounded shadow h-fit dark:shadow-lg sm:col-span-3 lg:col-span-2">
          <span className="flex gap-1">
            <Star />
            <Star />
            <Star />
          </span>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ut ullam. Odit temporibus voluptate pariatur beatae eaque corporis
            labore delectus, fugiat magnam praesentium laboriosam ad sed sit
            atque. Voluptate accusantium illo esse accusamus quo natus eius? Ut
            quis beatae ex.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent"></div>
            <span>John Smith</span>
          </div>
        </div>
        <div className="col-span-6 p-4 space-y-4 border rounded shadow h-fit dark:shadow-lg sm:col-span-3 lg:col-span-2">
          <span className="flex gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ut ullam. Odit temporibus voluptate pariatur beatae eaque corporis
            labore delectus, fugiat magnam praesentium laboriosam ad sed sit
            atque.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent"></div>
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="col-span-6 p-4 space-y-4 border rounded shadow h-fit dark:shadow-lg sm:col-span-6 lg:col-span-2">
          <span className="flex gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
          <p className="text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            minima sapiente dolor laudantium nihil, dolores doloremque. Quaerat
            neque accusantium veritatis. Ipsam nesciunt nemo sapiente quo maxime
            ratione provident rerum laboriosam nostrum eveniet aliquid neque, in
            illum doloremque esse pariatur officia itaque alias, molestiae
            velit. Voluptas architecto ipsa velit? Et, maiores?
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent"></div>
            <span>Anonymous</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerOpinions;
