import { useState, useRef } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState('idle');
    const inputRef = useRef(null);


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            setStatus('idle');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
            setStatus('idle');
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
        setStatus('uploading');

        // TODO: replace with real endpoint once API contract is confirmed with backend

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // const response = await fetch('/api/upload', {
                // method: 'POST',
                // body: formData,
            // });
            // if (!response.ok) throw new Error('Upload failed');

            await new Promise((resolve) => setTimeout(resolve, 800));

            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="file-upload">
            <div
                className={`file-upload__dropzone ${isDragging ? 'file-upload__dropzone--active' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => inputRef.current.click()}
                >
                <input
                    ref={inputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                {selectedFile ? (
                    <p>{selectedFile.name}</p>
                ) : (
                    <p>Drag & drop a file here or click to select</p>
                )}
            </div>

            <button
                onClick={handleUpload}
                disabled={!selectedFile || status === 'uploading'}
            >
                {status === 'uploading' ? 'Uploading...' : 'Upload'}
            </button>

            {status === 'success' && <p className="file-upload__status">Upload successful</p>}
            {status === 'error' && <p className="file-upload__status file-upload__status--error">Upload failed. Try again.</p>}
        </div>
    );
}

export default FileUpload;