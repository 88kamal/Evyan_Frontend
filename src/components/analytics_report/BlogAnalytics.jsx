import { motion } from 'framer-motion';
import { 
  FiCalendar, 
  FiFileText, 
  FiTrendingUp,
  FiBarChart2,
  FiArchive
} from 'react-icons/fi';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useGetBlogAnalyticsQuery } from '../../redux/slices/blogSlice';

// Color palette for the pie chart
const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EC4899'];

const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-xl" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="h-96 flex items-center justify-center">
          <div className="h-64 w-64 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );

const BlogAnalytics = () => {
  const { data, isLoading, isError } = useGetBlogAnalyticsQuery();

  // Chart data formatter
  const chartData = data ? [
    { name: 'Today', value: data.todayBlogs },
    { name: '7 Days', value: data.last7DaysBlogs },
    { name: '30 Days', value: data.last30DaysBlogs },
    { name: 'Year', value: data.yearlyBlogs },
    { name: 'Total', value: data.totalBlogs }
  ] : [];


  const totalPosts = data?.totalBlogs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  if (isError) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 text-center text-red-500"
    >
      Failed to load analytics data
    </motion.div>
  );

  if (isLoading) return <SkeletonLoader />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Metrics Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Total Blogs Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-blue-600/20 rounded-xl">
              <FiFileText className="text-3xl text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Total Articles
              </h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {isLoading ? '--' : data?.totalBlogs?.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Today's Blogs Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-green-600/20 rounded-xl">
              <FiCalendar className="text-3xl text-green-600 dark:text-green-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                Today's Posts
              </h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {isLoading ? '--' : data?.todayBlogs?.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 7 Days Trend Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-purple-600/20 rounded-xl">
              <FiTrendingUp className="text-3xl text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                7 Days Trend
              </h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {isLoading ? '--' : data?.last7DaysBlogs?.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 30 Days Performance Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-orange-600/20 rounded-xl">
              <FiBarChart2 className="text-3xl text-orange-600 dark:text-orange-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                30 Days Performance
              </h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {isLoading ? '--' : data?.last30DaysBlogs?.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Pie Chart Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative group"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
          Content Distribution Overview
        </h3>
        <div className="h-96 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                animationDuration={800}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    stroke="none"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => (
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg border dark:border-gray-600">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {payload?.[0]?.name}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400">
                      {payload?.[0]?.value} Posts
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        ({(payload?.[0]?.value / totalPosts * 100).toFixed(1)}%)
                      </span>
                    </p>
                  </div>
                )}
              />
              <text
                x="50%"
                y="45%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-4xl font-bold text-gray-800 dark:text-gray-200"
              >
                {totalPosts.toLocaleString()}
                <tspan 
                  x="50%" 
                  y="55%" 
                  className="block text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  Total Posts
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Animated Legend */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {chartData.map((entry, index) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div 
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {entry.name}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {entry.value} ({(entry.value / totalPosts * 100).toFixed(1)}%)
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </motion.div>
    </div>
  );
};

export default BlogAnalytics;