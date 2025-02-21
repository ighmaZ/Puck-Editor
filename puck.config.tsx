import { Config } from "@measured/puck";
import { Trash2, Plus } from "lucide-react";
import { styles } from "./app/styles/ComponentStyles";

type FieldType =
  | "text"
  | "radio"
  | "checkbox"
  | "select"
  | "textarea"
  | "email";

interface FormField {
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

type Props = {
  HeadingBlock: {
    title: string;
    subtitle?: string;
  };
  Form: {
    fields: FormField[];
    submitButtonText?: string;
  };
  Button: {
    text: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    size: "sm" | "md" | "lg";
    fullWidth?: boolean;
    disabled?: boolean;
  };
  Text: {
    content: string;
    variant: "paragraph" | "lead" | "large" | "small" | "muted";
    alignment: "left" | "center" | "right";
  };
  Card: {
    title: string;
    description?: string;
    buttonText?: string;
    buttonVariant?: "primary" | "secondary" | "outline";
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
        subtitle: "",
      },
      render: ({ title, subtitle }) => (
        <div style={styles.headingBlock}>
          <h1 style={styles.heading}>{title}</h1>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        </div>
      ),
    },
    Form: {
      fields: {
        fields: {
          type: "custom",
          render: ({ value = [], onChange }) => {
            const addField = () => {
              const newField: FormField = {
                label: "",
                type: "text",
                placeholder: "",
                required: false,
              };
              onChange([...value, newField]);
            };

            const removeField = (index: number) => {
              const updatedFields = value.filter((_, i) => i !== index);
              onChange(updatedFields);
            };

            const updateField = (
              index: number,
              updates: Partial<FormField>
            ) => {
              const updatedFields = [...value];
              updatedFields[index] = { ...updatedFields[index], ...updates };
              onChange(updatedFields);
            };

            return (
              <div>
                <button style={styles.addButton} onClick={addField}>
                  <Plus size={16} />
                  Add Field
                </button>

                {value.map((field, index) => (
                  <div key={index} style={styles.fieldEditor}>
                    <div style={styles.fieldEditorHeader}>
                      <div style={styles.fieldEditorContent}>
                        <div style={styles.inputGroup}>
                          <label style={styles.label}>Field Label</label>
                          <div style={styles.flexRow}>
                            <input
                              type="text"
                              style={styles.input}
                              placeholder="Enter field label"
                              value={field.label}
                              onChange={(e) =>
                                updateField(index, { label: e.target.value })
                              }
                            />
                            <button
                              onClick={() => removeField(index)}
                              style={styles.removeButton}
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>

                        <div style={styles.flexRow}>
                          <div style={styles.fieldTypeContainer}>
                            <label style={styles.label}>Field Type</label>
                            <select
                              style={styles.select}
                              value={field.type}
                              onChange={(e) =>
                                updateField(index, {
                                  type: e.target.value as FieldType,
                                })
                              }
                            >
                              <option value="text">Text Box</option>
                              <option value="email">Email</option>
                              <option value="textarea">Text Area</option>
                              <option value="radio">Radio Buttons</option>
                              <option value="checkbox">Checkbox</option>
                              <option value="select">Dropdown</option>
                            </select>
                          </div>

                          <div style={styles.placeholderContainer}>
                            <label style={styles.label}>Placeholder</label>
                            <input
                              type="text"
                              style={styles.input}
                              placeholder="Enter placeholder text"
                              value={field.placeholder || ""}
                              onChange={(e) =>
                                updateField(index, {
                                  placeholder: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        {(field.type === "radio" ||
                          field.type === "select") && (
                          <div style={styles.inputGroup}>
                            <label style={styles.label}>
                              Options (one per line)
                            </label>
                            <textarea
                              style={styles.textarea}
                              rows={3}
                              value={field.options?.join("\n") || ""}
                              onChange={(e) =>
                                updateField(index, {
                                  options: e.target.value
                                    .split("\n")
                                    .filter(Boolean),
                                })
                              }
                            />
                          </div>
                        )}

                        <div>
                          <label style={styles.checkboxLabel}>
                            <input
                              type="checkbox"
                              checked={field.required}
                              onChange={(e) =>
                                updateField(index, {
                                  required: e.target.checked,
                                })
                              }
                            />
                            <span>Required field</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          },
        },
        submitButtonText: {
          type: "text",
        },
      },
      defaultProps: {
        fields: [],
        submitButtonText: "Submit",
      },
      render: ({ fields, submitButtonText }) => (
        <form onSubmit={(e) => e.preventDefault()} style={styles.formContainer}>
          {fields.map((field, index) => (
            <div key={index} style={styles.formField}>
              <label style={styles.label}>
                {field.label}
                {field.required && <span style={styles.requiredMark}>*</span>}
              </label>

              {field.type === "text" && (
                <input
                  type="text"
                  style={styles.input}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}

              {field.type === "email" && (
                <input
                  type="email"
                  style={styles.input}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}

              {field.type === "textarea" && (
                <textarea
                  style={styles.textarea}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={4}
                />
              )}

              {field.type === "radio" && (
                <div style={styles.radioGroup}>
                  {field.options?.map((option, optionIndex) => (
                    <label key={optionIndex} style={styles.checkboxLabel}>
                      <input
                        type="radio"
                        name={`radio-${index}`}
                        value={option}
                        required={field.required}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {field.type === "checkbox" && (
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" required={field.required} />
                  <span>{field.placeholder}</span>
                </label>
              )}

              {field.type === "select" && (
                <select style={styles.select} required={field.required}>
                  <option value="">Select an option</option>
                  {field.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

          {fields.length > 0 && (
            <button type="submit" style={styles.submitButton}>
              {submitButtonText}
            </button>
          )}
        </form>
      ),
    },
    Button: {
      fields: {
        text: { type: "text" },
        variant: {
          type: "select",
          options: [
            { value: "primary", label: "Primary" },
            { value: "secondary", label: "Secondary" },
            { value: "outline", label: "Outline" },
            { value: "ghost", label: "Ghost" },
          ],
        },
        size: {
          type: "select",
          options: [
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ],
        },
        fullWidth: { type: "text" },
        disabled: { type: "text" },
      },
      defaultProps: {
        text: "Click me",
        variant: "primary",
        size: "md",
        fullWidth: false,
        disabled: false,
      },
      render: ({ text, variant, size, fullWidth, disabled }) => {
        const buttonStyles = {
          ...styles.button.base,
          ...styles.button.variants[variant],
          ...styles.button.sizes[size],
          width: fullWidth ? "100%" : "auto",
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        };

        return (
          <button style={buttonStyles} disabled={disabled}>
            {text}
          </button>
        );
      },
    },
    Text: {
      fields: {
        content: { type: "textarea" },
        variant: {
          type: "select",
          options: [
            { value: "paragraph", label: "Paragraph" },
            { value: "lead", label: "Lead" },
            { value: "large", label: "Large" },
            { value: "small", label: "Small" },
            { value: "muted", label: "Muted" },
          ],
        },
        alignment: {
          type: "select",
          options: [
            { value: "left", label: "Left" },
            { value: "center", label: "Center" },
            { value: "right", label: "Right" },
          ],
        },
      },
      defaultProps: {
        content: "Enter your text here",
        variant: "paragraph",
        alignment: "left",
      },
      render: ({ content, variant, alignment }) => {
        const textStyles = {
          ...styles.text.base,
          ...styles.text.variants[variant],
          textAlign: alignment,
        };

        return <p style={textStyles}>{content}</p>;
      },
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        buttonVariant: {
          type: "select",
          options: [
            { value: "primary", label: "Primary" },
            { value: "secondary", label: "Secondary" },
            { value: "outline", label: "Outline" },
          ],
        },
      },
      defaultProps: {
        title: "Card Title",
        description: "Card description goes here",
        buttonText: "Learn More",
        buttonVariant: "primary",
      },
      render: ({ title, description, buttonText, buttonVariant }) => {
        return (
          <div style={styles.card.container}>
            <div style={styles.card.content}>
              <h3 style={styles.card.title}>{title}</h3>
              {description && (
                <p style={styles.card.description}>{description}</p>
              )}
              {buttonText && (
                <button
                  style={{
                    ...styles.button.base,
                    ...styles.button.variants[buttonVariant || "primary"],
                    ...styles.button.sizes.md,
                  }}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        );
      },
    },
  },
};

export default config;
