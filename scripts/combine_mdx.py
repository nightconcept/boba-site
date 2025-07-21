import os
import re

def combine_mdx_files(source_dir, output_file, header):
    """
    Combines all MDX files from a specified directory into a single markdown
    file, stripping all front matter and adding a H1 header for the section.
    """
    combined_content = []
    files_processed_count = 0

    # Add the section header
    combined_content.append(f"{header}")

    # Check if directory exists
    if not (os.path.exists(source_dir) and os.path.isdir(source_dir)):
        print(f"Error: Directory '{source_dir}' not found or is not a directory.")
        return

    # Separate files in root from files in subdirectories
    root_files = []
    sub_dir_files = []
    for root, dirs, files in os.walk(source_dir):
        dirs.sort()  # Sort directories for consistent order
        # Check if the current root is the source directory
        if root == source_dir:
            for file_name in sorted(files):
                if file_name.endswith('.mdx'):
                    root_files.append(os.path.join(root, file_name))
        else:
            for file_name in sorted(files):
                if file_name.endswith('.mdx'):
                    sub_dir_files.append(os.path.join(root, file_name))

    # Process files in subdirectories first, then root files
    for file_path in sub_dir_files + root_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

                # Extract title from front matter, default to "Untitled"
                title = "Untitled"
                front_matter_match = re.search(r'^---\s*(.*?)\s*---', content, flags=re.DOTALL)
                if front_matter_match:
                    front_matter = front_matter_match.group(1)
                    title_match = re.search(r'^\s*title:\s*"(.*?)"', front_matter, flags=re.MULTILINE)
                    if title_match:
                        title = title_match.group(1)

                # Remove front matter using regex
                content_without_front_matter = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)
                # Remove import statements that are typically at the top of MDX files
                content_without_imports = re.sub(r'^\s*import .*?[\r\n]+', '', content_without_front_matter, flags=re.MULTILINE)
                
                # Combine H2 header with content and add to list
                final_content = f"## {title}\n\n{content_without_imports.strip()}"
                combined_content.append(final_content)
                files_processed_count += 1
        except Exception as e:
            print(f"Error processing file {file_path}: {e}")

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("\n\n".join(combined_content) + "\n")

    print(f"Successfully combined {files_processed_count} files into {output_file}")

def main():
    """
    Combines all MDX files from the learn directory into a single markdown file.
    """
    source_dir = os.path.join('src', 'content', 'docs', 'learn')
    output_file = os.path.join('project', 'boba-learn.md')
    header = "# learn"
    combine_mdx_files(source_dir, output_file, header)

if __name__ == "__main__":
    main()