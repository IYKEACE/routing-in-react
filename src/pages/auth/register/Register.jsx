import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: ["user"],
    jobRole: [], // New field for specific job roles
    address: "",
    profileImage:
      "https://cdn.pixabay.com/photo/2020/06/29/20/31/man-5354308_1280.png",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    "https://cdn.pixabay.com/photo/2020/06/29/20/31/man-5354308_1280.png"
  );

  // Available job roles
  const jobRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Data Scientist",
    "Mobile Developer",
    "QA Engineer",
    "Project Manager",
    "Product Manager",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleJobRoleChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedJobRoles = checked
        ? [...prev.jobRole, value]
        : prev.jobRole.filter((role) => role !== value);

      return {
        ...prev,
        jobRole: updatedJobRoles,
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Image must be less than 5MB",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);

      if (errors.profileImage) {
        setErrors((prev) => ({ ...prev, profileImage: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // First name validation
    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    } else if (formData.firstname.length < 3) {
      newErrors.firstname = "First name must be at least 3 characters";
    } else if (formData.firstname.length > 30) {
      newErrors.firstname = "First name cannot exceed 30 characters";
    }

    // Last name validation
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    } else if (formData.lastname.length < 3) {
      newErrors.lastname = "Last name must be at least 3 characters";
    } else if (formData.lastname.length > 30) {
      newErrors.lastname = "Last name cannot exceed 30 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (formData.password.length > 25) {
      newErrors.password = "Password cannot exceed 25 characters";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Job role validation (optional)
    if (formData.jobRole.length === 0) {
      newErrors.jobRole = "Please select at least one job role";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save to localStorage
      const userData = {
        ...formData,
        role: formData.role,
        jobRole: formData.jobRole,
        profileImage: formData.profileImage,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("authToken", "demo-token-" + Date.now());

      navigate("/dashboard");
    } catch (error) {
      setErrors({ general: "An error occurred during registration" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerCard}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join our developer community</p>

        {errors.general && (
          <div className={styles.errorMessage}>{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Profile Image Upload */}
          <div className={styles.profileSection}>
            <div className={styles.imagePreview}>
              <img
                src={imagePreview}
                alt="Profile preview"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.imageUpload}>
              <label htmlFor="profileImage" className={styles.uploadLabel}>
                Upload Photo
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              {errors.profileImage && (
                <span className={styles.errorText}>{errors.profileImage}</span>
              )}
            </div>
          </div>

          {/* Name Fields */}
          <div className={styles.nameRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstname" className={styles.label}>
                First Name *
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className={
                  errors.firstname
                    ? `${styles.input} ${styles.error}`
                    : styles.input
                }
                placeholder="Enter first name"
                maxLength={30}
              />
              {errors.firstname && (
                <span className={styles.errorText}>{errors.firstname}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="lastname" className={styles.label}>
                Last Name *
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className={
                  errors.lastname
                    ? `${styles.input} ${styles.error}`
                    : styles.input
                }
                placeholder="Enter last name"
                maxLength={30}
              />
              {errors.lastname && (
                <span className={styles.errorText}>{errors.lastname}</span>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={
                errors.email ? `${styles.input} ${styles.error}` : styles.input
              }
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={
                errors.password
                  ? `${styles.input} ${styles.error}`
                  : styles.input
              }
              placeholder="Create password (8-25 characters)"
              maxLength={25}
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          {/* Address Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="address" className={styles.label}>
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={
                errors.address
                  ? `${styles.textarea} ${styles.error}`
                  : styles.textarea
              }
              placeholder="Enter your complete address"
              rows={3}
            />
            {errors.address && (
              <span className={styles.errorText}>{errors.address}</span>
            )}
          </div>

          {/* Account Type Selection */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Account Type *</label>
            <div className={styles.roleOptions}>
              <label className={styles.roleOption}>
                <input
                  type="checkbox"
                  checked={formData.role.includes("user")}
                  onChange={(e) => {
                    const updatedRoles = e.target.checked
                      ? [...formData.role, "user"]
                      : formData.role.filter((role) => role !== "user");
                    setFormData((prev) => ({ ...prev, role: updatedRoles }));
                  }}
                />
                <span>User</span>
              </label>
              <label className={styles.roleOption}>
                <input
                  type="checkbox"
                  checked={formData.role.includes("admin")}
                  onChange={(e) => {
                    const updatedRoles = e.target.checked
                      ? [...formData.role, "admin"]
                      : formData.role.filter((role) => role !== "admin");
                    setFormData((prev) => ({ ...prev, role: updatedRoles }));
                  }}
                />
                <span>Admin</span>
              </label>
            </div>
          </div>

          {/* Job Role Selection */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Job Role *</label>
            <div className={styles.jobRolesGrid}>
              {jobRoles.map((role) => (
                <label key={role} className={styles.jobRoleOption}>
                  <input
                    type="checkbox"
                    value={role}
                    checked={formData.jobRole.includes(role)}
                    onChange={handleJobRoleChange}
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
            {errors.jobRole && (
              <span className={styles.errorText}>{errors.jobRole}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={styles.registerButton}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <div className={styles.loginLink}>
          <p>
            Already have an account?{" "}
            <Link to="/auth/login" className={styles.link}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
