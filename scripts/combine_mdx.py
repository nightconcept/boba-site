import os
import re

def combine_mdx_files():
    """
    Combines all MDX files from 'src/content/docs/learn' and
    'src/content/docs/reference' into a single markdown file in
    'project/boba-syntax.md', stripping all front matter.
    """
    learn_dir = os.path.join('src', 'content', 'docs', 'learn')
    reference_dir = os.path.join('src', 'content', 'docs', 'reference')
    output_file = os.path.join('project', 'boba-syntax.md')
    
    # Directories to process, in order. User specified learn then reference.
    dirs_to_process = [learn_dir, reference_dir]
    
    combined_content = "# Boba Lang\n\n"
    files_processed_count = 0
    
    for current_dir_path in dirs_to_process:
        # Check if directory exists
        if not (os.path.exists(current_dir_path) and os.path.isdir(current_dir_path)):
            print(f"Warning: Directory '{current_dir_path}' not found or is not a directory. Skipping.")
            continue # Skip this directory
            
        # Get sorted list of mdx files for the current directory
        current_mdx_files = sorted([f for f in os.listdir(current_dir_path) if f.endswith('.mdx')])
        
        for file_name in current_mdx_files:
            file_path = os.path.join(current_dir_path, file_name)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Remove front matter using regex
                    content_without_front_matter = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)
                    combined_content += content_without_front_matter + "\n" # Consistent with original logic
                    files_processed_count += 1
            except Exception as e:
                print(f"Error processing file {file_path}: {e}")
            
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(combined_content)
        
    print(f"Successfully combined {files_processed_count} files into {output_file}")

if __name__ == "__main__":
    combine_mdx_files()