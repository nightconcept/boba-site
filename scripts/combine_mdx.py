import os
import re
import argparse

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

    # Get sorted list of mdx files for the current directory
    current_mdx_files = sorted([f for f in os.listdir(source_dir) if f.endswith('.mdx')])

    for file_name in current_mdx_files:
        file_path = os.path.join(source_dir, file_name)
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Remove front matter using regex
                content_without_front_matter = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)
                combined_content.append(content_without_front_matter.strip())
                files_processed_count += 1
        except Exception as e:
            print(f"Error processing file {file_path}: {e}")

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("\n\n".join(combined_content) + "\n")

    print(f"Successfully combined {files_processed_count} files into {output_file}")

def main():
    """
    Parses command line arguments and calls the combine_mdx_files function.
    """
    parser = argparse.ArgumentParser(description="Combine MDX files from specified directories.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--learn', action='store_true', help='Combine files from the learn directory.')
    group.add_argument('--ref', action='store_true', help='Combine files from the reference directory.')

    args = parser.parse_args()

    if args.learn:
        source_dir = os.path.join('src', 'content', 'docs', 'learn')
        output_file = os.path.join('project', 'boba-learn.md')
        header = "# learn"
        combine_mdx_files(source_dir, output_file, header)
    elif args.ref:
        source_dir = os.path.join('src', 'content', 'docs', 'reference', '01-language')
        output_file = os.path.join('project', 'boba-ref.md')
        header = "# reference"
        combine_mdx_files(source_dir, output_file, header)

if __name__ == "__main__":
    main()