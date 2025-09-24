import { FiTarget } from "react-icons/fi";

function FarmerProfile() {
  // Static profile data
  const profile = {
    name: "Ramesh Kumar",
    email: "ramesh@example.com",
    phone: "9876543210",
    farmName: "Green Valley Farm",
    location: "Punjab, India",
    farmSize: "10",
    primaryCrop: "wheat",
    landPhotos: [
      { preview: "https://placehold.co/600x400/a2e2a2/333?text=Land+1" },
      { preview: "https://placehold.co/600x400/a2e2a2/333?text=Land+2" },
    ],
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="h-20 w-20 bg-green-200 rounded-full flex items-center justify-center text-3xl font-bold text-white">
            {profile.name.charAt(0)}
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-800">Farmer Profile</h1>
          <p className="text-gray-500 text-sm">Your personal and farm details</p>
        </div>

        <div className="space-y-6">
          {/* Personal Info */}
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Personal Info</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Full Name</span>
              <span className="text-gray-800">{profile.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Email</span>
              <span className="text-gray-800">{profile.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Phone</span>
              <span className="text-gray-800">{profile.phone}</span>
            </div>
          </div>

          {/* Farm Info */}
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Farm Info</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Farm Name</span>
              <span className="text-gray-800">{profile.farmName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Location</span>
              <div className="flex items-center gap-2 text-gray-800">
                <span>{profile.location}</span>
                <FiTarget className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Farm Size</span>
              <span className="text-gray-800">{profile.farmSize} acres</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Primary Crop</span>
              <span className="text-gray-800 capitalize">{profile.primaryCrop}</span>
            </div>
          </div>

          {/* Land Photos */}
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Land Photos</h2>
          {profile.landPhotos.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {profile.landPhotos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={photo.preview}
                    alt={`Land ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No land photos uploaded.</p>
          )}

          {/* Action Button */}
          <button
            type="button"
            className="w-full mt-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmerProfile;
