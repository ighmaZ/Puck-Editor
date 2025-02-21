// styles/componentStyles.ts

export const styles = {
  headingBlock: {
    padding: "32px 24px",
  },
  heading: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#666",
  },
  formContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "24px",
  },
  formField: {
    marginBottom: "24px",
  },
  fieldEditor: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
  },
  fieldEditorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
  },
  fieldEditorContent: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontWeight: 500,
    marginBottom: "4px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    minHeight: "80px",
  },
  flexRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "16px",
  },
  removeButton: {
    padding: "8px",
    background: "none",
    border: "none",
    color: "#ef4444",
    cursor: "pointer",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "8px 24px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  requiredMark: {
    color: "#ef4444",
    marginLeft: "4px",
  },
  fieldTypeContainer: {
    flex: "1 1 200px",
    minWidth: "200px",
  },
  placeholderContainer: {
    flex: "2 1 300px",
    minWidth: "200px",
  },
  button: {
    base: {
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      fontWeight: 500,
      transition: "all 0.2s ease",
    },
    variants: {
      primary: {
        backgroundColor: "#2563eb",
        color: "white",
        "&:hover": { backgroundColor: "#1d4ed8" },
      },
      secondary: {
        backgroundColor: "#4b5563",
        color: "white",
        "&:hover": { backgroundColor: "#374151" },
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid #2563eb",
        color: "#2563eb",
        "&:hover": { backgroundColor: "#eff6ff" },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "#2563eb",
        "&:hover": { backgroundColor: "#eff6ff" },
      },
    },
    sizes: {
      sm: { padding: "4px 12px", fontSize: "14px" },
      md: { padding: "8px 16px", fontSize: "16px" },
      lg: { padding: "12px 24px", fontSize: "18px" },
    },
  },
  text: {
    base: {
      margin: "0 0 16px 0",
      lineHeight: 1.6,
    },
    variants: {
      paragraph: { fontSize: "16px" },
      lead: { fontSize: "20px", fontWeight: 500 },
      large: { fontSize: "24px" },
      small: { fontSize: "14px" },
      muted: { fontSize: "14px", color: "#666" },
    },
  },
  card: {
    container: {
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "white",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "24px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    description: {
      color: "#4b5563",
      marginBottom: "16px",
    },
  },
} as const;
